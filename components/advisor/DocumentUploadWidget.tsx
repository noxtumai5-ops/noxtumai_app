"use client";

import { useState } from "react";
import { UploadCloud, FileText, CheckCircle2, AlertCircle, X, Sparkles } from "lucide-react";

interface DocumentUploadWidgetProps {
  onSessionReady: (sessionId: string, fileName: string, chunkCount: number) => void;
  activeSessionId?: string | null;
  activeFileName?: string | null;
  onClearSession?: () => void;
}

export function DocumentUploadWidget({
  onSessionReady,
  activeSessionId,
  activeFileName,
  onClearSession
}: DocumentUploadWidgetProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/rag/upload", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to process project document.");
      }

      onSessionReady(data.sessionId, data.fileName, data.chunkCount);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Upload failed. Please try again.");
    } finally {
      setUploading(false);
      // Reset input value
      e.target.value = "";
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#08080a] p-3.5 space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-mono font-bold text-neutral-300">
            OPTIONAL: DISCUSS WITH YOUR PROJECT BRIEF (PDF / TXT)
          </span>
        </div>
        <span className="text-[10px] font-mono text-neutral-500">Max 5MB</span>
      </div>

      {activeSessionId && activeFileName ? (
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono truncate">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span className="truncate font-semibold">{activeFileName}</span>
            <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-300 shrink-0">
              Active Context
            </span>
          </div>
          {onClearSession && (
            <button
              type="button"
              onClick={onClearSession}
              className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer ml-2"
              title="Remove document context"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ) : (
        <div>
          <label className="flex items-center justify-center gap-2.5 p-3 rounded-lg border border-dashed border-white/20 hover:border-blue-500/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group">
            <input
              type="file"
              accept=".pdf,.txt,.md,.json"
              onChange={handleFileChange}
              disabled={uploading}
              className="hidden"
            />
            {uploading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
                <span className="text-xs font-mono text-blue-400">
                  Parsing and indexing semantic sections...
                </span>
              </>
            ) : (
              <>
                <UploadCloud className="w-4 h-4 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  Upload project brief / technical document for grounded AI evaluation
                </span>
              </>
            )}
          </label>

          {error && (
            <div className="mt-2 p-2 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[11px] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
