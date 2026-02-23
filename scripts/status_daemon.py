import json
import subprocess
import time
import os

STATUS_FILE = "ui/system_status.json"

def get_session_status():
    try:
        # We can't easily call the internal 'session_status' tool, 
        # but we can call 'openclaw status' or similar if available.
        # Alternatively, we just log our current time and dummy data for now
        # until we can integrate better.
        return {
            "timestamp": time.time(),
            "health": "Optimal",
            "active_threads": 1,
            "token_in": 8200,
            "token_out": 751,
            "session_id": "coding-agent"
        }
    except:
        return {}

def main():
    while True:
        status = get_session_status()
        with open(STATUS_FILE, "w") as f:
            json.dump(status, f)
        time.sleep(60)

if __name__ == "__main__":
    main()
