export type HealthResponse = {
  status: string;
};

export type MessageResponse = {
  message: string;
  stack: {
    backend: string;
    frontend: string;
  };
};
