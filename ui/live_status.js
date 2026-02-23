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
    ]
};
