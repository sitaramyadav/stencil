
export const STENCIL_DEV_MODE = ['%cstencil dev mode', 'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px'];

export const consoleDevError = (...m: any[]) => console.error(...STENCIL_DEV_MODE, ...m);

export const consoleDevWarn = (...m: any[]) => console.warn(...STENCIL_DEV_MODE, ...m);

export const consoleDevInfo = (...m: any[]) => console.info(...STENCIL_DEV_MODE, ...m);

export const consoleError = (e: any) => console.error(e);
