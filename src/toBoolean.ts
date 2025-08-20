export const toBoolean = (staging?: string | boolean | null): boolean => {
    if (typeof staging === "boolean") return staging;
    if (typeof staging === "string") return staging.toLowerCase() === "true";
    return false; // ✅ default fallback
  };
  