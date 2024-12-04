# Graceful Shutdown of Node.js HTTP Server

This repository demonstrates a common issue in Node.js where an HTTP server doesn't gracefully shut down when terminated using Ctrl+C.  This can result in resource leaks and unexpected behavior.

## The Problem

The provided `bug.js` file contains a simple HTTP server.  When you run this server and terminate it with Ctrl+C, the server will likely not shut down immediately.  This is because existing connections might still be active, and the server may not clean up resources properly.

## The Solution

The solution, shown in `bugSolution.js`, utilizes the `server.close()` method. This method ensures that all active connections are properly handled before the server terminates, preventing resource leaks.

## How to Run

1. Clone the repository.
2. Navigate to the directory.
3. Run `node bug.js` (to see the issue).
4. Then run `node bugSolution.js` (to observe the graceful shutdown).