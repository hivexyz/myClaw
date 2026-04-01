from fastapi import APIRouter

from app.schemas.message import MessageResponse
from app.services.message_service import build_welcome_message

router = APIRouter(tags=["message"])


@router.get("/message", response_model=MessageResponse)
def get_message() -> MessageResponse:
    return build_welcome_message()
