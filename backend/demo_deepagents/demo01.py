from deepagents import create_deep_agent
from deepagents.backends import FilesystemBackend
from langchain_openai import ChatOpenAI 
LLM_BASE_URL = "http://172.18.30.136:7878/v1"
LLM_MODEL = "qw38b"
LLM_API_KEY = "EMPTY"
llm = ChatOpenAI(
    base_url=LLM_BASE_URL,
    model=LLM_MODEL,
    api_key=LLM_API_KEY,
)
backend = FilesystemBackend(
    root_dir="D:/Python/myClaw/backend",
    virtual_mode=True,
)
agent = create_deep_agent(
    model=llm,
    # tools=[],
    system_prompt="You are a helpful assistant.",
    backend=backend,
    skills=["/skills/"],
)
result = agent.invoke({"messages": [{"role": "user", "content": "langgraph 是什么？"}]})

# Print the agent's response
print(result["messages"][-1].content)