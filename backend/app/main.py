from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Rex AI Assistant Backend"}

@app.get("/todo")
def get_todos():
    # Placeholder for getting todos
    return {"todos": []}

@app.post("/todo")
def create_todo():
    # Placeholder for creating a todo
    return {"message": "Todo created"}
