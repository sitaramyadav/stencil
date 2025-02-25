import { Diagnostic } from '.';


export interface StyleCompiler {
  modeName: string;
  styleId: string;
  styleStr: string;
  styleIdentifier: string;
  externalStyles: ExternalStyleCompiler[];
  compiledStyleText: string;
  compiledStyleTextScoped: string;
  compiledStyleTextScopedCommented: string;
}


export interface ExternalStyleCompiler {
  absolutePath: string;
  relativePath: string;
  originalComponentPath: string;
}


export interface CompilerModeStyles {
  [modeName: string]: string[];
}


export interface CssImportData {
  srcImport: string;
  updatedImport?: string;
  url: string;
  filePath?: string;
  altFilePath?: string;
  styleText?: string;
}


export interface CssToEsmImportData {
  srcImportText: string;
  varName: string;
  url: string;
  filePath: string;
}

export interface TransformCssToEsmInput {
  filePath: string;
  code: string;
  tagName: string;
  encapsulation: string;
  modeName: string;
  commentOriginalSelector: boolean;
  sourceMap: boolean;
}

export interface TransformCssToEsmOutput {
  code: string;
  map: any;
  diagnostics: Diagnostic[];
}
