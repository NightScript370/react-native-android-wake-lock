import { WakeLockModule } from "./types";
declare const WakeLockNativeModule: WakeLockModule;
declare const WakeLockInterface: {
    setWakeLock(): Promise<boolean>;
    releaseWakeLock(): Promise<boolean>;
    isWakeLocked(): Promise<boolean>;
};
declare const useWakeLock: () => void;
export { WakeLockNativeModule, WakeLockInterface, useWakeLock };
