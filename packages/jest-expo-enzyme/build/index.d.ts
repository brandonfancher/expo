import { Config } from '@jest/types';
export default function withEnzyme(preset: Config.ProjectConfig): {
    setupFilesAfterEnv: string[];
    snapshotSerializers: string[];
    testEnvironmentOptions: {
        enzymeAdapter: string;
    };
    testEnvironment: string;
    automock: boolean;
    cache: boolean;
    cacheDirectory: string;
    clearMocks: boolean;
    coveragePathIgnorePatterns: string[];
    cwd: string;
    dependencyExtractor?: string | undefined;
    detectLeaks: boolean;
    detectOpenHandles: boolean;
    displayName?: Config.DisplayName | undefined;
    errorOnDeprecated: boolean;
    extraGlobals: ("undefined" | "Array" | "ArrayBuffer" | "Boolean" | "Buffer" | "DataView" | "Date" | "Error" | "EvalError" | "Float32Array" | "Float64Array" | "Function" | "Infinity" | "Int16Array" | "Int32Array" | "Int8Array" | "Intl" | "JSON" | "Map" | "Math" | "NaN" | "Number" | "Object" | "Promise" | "RangeError" | "ReferenceError" | "RegExp" | "Set" | "String" | "Symbol" | "SyntaxError" | "TypeError" | "URIError" | "Uint16Array" | "Uint32Array" | "Uint8Array" | "Uint8ClampedArray" | "WeakMap" | "WeakSet" | "clearImmediate" | "clearInterval" | "clearTimeout" | "console" | "decodeURI" | "decodeURIComponent" | "encodeURI" | "encodeURIComponent" | "escape" | "eval" | "global" | "isFinite" | "isNaN" | "parseFloat" | "parseInt" | "process" | "setImmediate" | "setInterval" | "setTimeout" | "queueMicrotask" | "unescape" | "gc" | "v8debug")[];
    filter?: string | undefined;
    forceCoverageMatch: string[];
    globalSetup?: string | undefined;
    globalTeardown?: string | undefined;
    globals: Config.ConfigGlobals;
    haste: Config.HasteConfig;
    moduleDirectories: string[];
    moduleFileExtensions: string[];
    moduleLoader?: string | undefined;
    moduleNameMapper: [string, string][];
    modulePathIgnorePatterns: string[];
    modulePaths?: string[] | undefined;
    name: string;
    prettierPath: string;
    resetMocks: boolean;
    resetModules: boolean;
    resolver?: string | undefined;
    restoreMocks: boolean;
    rootDir: string;
    roots: string[];
    runner: string;
    setupFiles: string[];
    skipFilter: boolean;
    skipNodeResolution?: boolean | undefined;
    slowTestThreshold: number;
    snapshotResolver?: string | undefined;
    testMatch: string[];
    testLocationInResults: boolean;
    testPathIgnorePatterns: string[];
    testRegex: (string | RegExp)[];
    testRunner: string;
    testURL: string;
    timers: "real" | "fake" | "modern" | "legacy";
    transform: [string, string, Record<string, unknown>][];
    transformIgnorePatterns: string[];
    watchPathIgnorePatterns: string[];
    unmockedModulePathPatterns?: string[] | undefined;
} | undefined;
export { withEnzyme };
//# sourceMappingURL=index.d.ts.map