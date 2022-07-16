export class StorageHelper {
  static delete(key: string): void {
    localStorage.removeItem(key);
  }

  static read(key: string): string | null {
    return localStorage.getItem(key);
  }

  static set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
