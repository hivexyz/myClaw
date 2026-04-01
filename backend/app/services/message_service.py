from app.schemas.message import MessageResponse, StackInfo


def build_welcome_message() -> MessageResponse:
    return MessageResponse(
        message="Hello from FastAPI!",
        stack=StackInfo(backend="FastAPI", frontend="TypeScript + Vite"),
    )
