// ui/live_status.js - Live Status Feed for Bolt Control Center
window.BOLT_STATUS = {
    status: 'idle', // 'idle' | 'active' | 'thinking' | 'error'
    heartbeat: Date.now(),
    current_task: {
        title: "Awaiting Instructions",
        step: "Ready for next mission",
        started_at: null
    },
    queue: [
        { id: 1, title: "Monitor system health", priority: "low" }
    ],
    logs: [
        { level: "info", message: "System initialized. Dashboard online.", timestamp: Date.now() }
    ],
    subagents: [
        { name: "Jules", status: "active", task: "Optimizing database queries" },
        { name: "Meow", status: "idle", task: "Standing by" }
    ],
    session_status: {
        usage: 45000,
        limit: 100000,
        cost: 0.45
    }
};
