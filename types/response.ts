export interface FileUploadResponse {
    data: {
      id: string;
      file: string;
      size: number;
      mimeType: string;
      tags: string;
      originalName: string;
    };
    metadata: {
      timestamp: string;
      path: string;
    };
    message: string;
  }