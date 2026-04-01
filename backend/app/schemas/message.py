from pydantic import BaseModel


class StackInfo(BaseModel):
    backend: str
    frontend: str


class MessageResponse(BaseModel):
    message: str
    stack: StackInfo
