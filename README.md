Here’s the **real, minimal tech stack** actually used in your repository based on the code you’ve shared:

### **Confirmed Technologies in Use**
1. **TypeScript**  
   - *Only for*: The single `POST` route handler (`route.ts`).  
   - *Proof*: Your `req: Request` type annotation and `async` TS syntax.

2. **Next.js App Router**  
   - *Only for*: The API route (`/app/api/.../route.ts`).  
   - *Proof*: `export async function POST` is a Next.js 13+ App Router pattern.

3. **JavaScript ES6+**  
   - *Used for*:  
     - `async/await` (e.g., `await req.json()`).  
     - Array methods like `map()` (e.g., `bots.map()`).  
     - Template literals (`` `${prefix}...` ``).

4. **JSON**  
   - *Used for*:  
     - Request/response body format (`req.json()`, `Response.json()`).  
     - Hardcoded mock data (`expertiseByBot` object).

---

### **What’s *Not* in Your Repo (Yet)**
- **Tailwind/React/UI** → No frontend shown in your code.  
- **Vercel AI SDK/LLMs** → Pure mock responses (no real AI calls).  
- **Database/State** → Stateless API endpoint.  
- **Validation Libraries** → Raw `req.json()` parsing.  

---

### **Exact Stack Breakdown**
| File               | Technologies Used              |
|--------------------|--------------------------------|
| `route.ts`         | TypeScript, Next.js, ES6       |
| (No UI)            | (No React/Tailwind)            |
| (No Deployment)    | (No Vercel config shown)       |

Your repo is currently a **single TypeScript file** in a Next.js App Router endpoint with zero runtime dependencies. Everything else (Tailwind, React, LLMs) would be hypothetical extensions.
