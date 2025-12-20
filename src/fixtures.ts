import { VoiceId } from "./types";

/**
 * Location of the ml models
 */
export const HF_BASE = 'https://huggingface.co/navgurukul-ai-labs/text-to-speech-en-IN-piper/resolve/main';

/**
 * Inference runtime libary base path
 */
export const ONNX_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/onnxruntime-web/1.18.0/';

/**
 * Path to wasm related files
 */
export const WASM_BASE = "https://cdn.jsdelivr.net/npm/@diffusionstudio/piper-wasm@1.0.0/build/piper_phonemize";

/**
 * Path to ml models on huggingface
 */
export const PATH_MAP: Record<VoiceId, string> = {
  "en_IN-dataset=spicor-english-base=ljspeech-epochs=1089.onnx": "en_IN-dataset=spicor-english-base=ljspeech-epochs=1089.onnx"
}
