export class ContentBlockDomainError extends Error {
  constructor(message: string) {
    super(`Content Block Domain Error: ${message}`);
  }
}
