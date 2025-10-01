export function N8nWorkflow() {
  return (
    <svg viewBox="0 0 1200 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Connections */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="currentColor" opacity="0.5" />
        </marker>
      </defs>

      {/* Lines connecting nodes */}
      <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" markerEnd="url(#arrowhead)">
        {/* Check for new documents to Request approval */}
        <path d="M 180 80 L 280 120" />
        {/* On form submission to Request approval */}
        <path d="M 180 200 L 280 140" />
        {/* Request approval to Check if approved */}
        <path d="M 400 130 L 500 130" />
        {/* Check if approved to Capture approval (true path) */}
        <path d="M 620 130 L 750 100" />
        {/* Capture approval to Send confirmation */}
        <path d="M 870 90 L 970 90" />
        {/* Check if approved to Send feedback (false path) */}
        <path d="M 620 130 L 750 200" />
      </g>

      {/* Connection dots */}
      <g fill="currentColor" opacity="0.4">
        <circle cx="180" cy="80" r="4" />
        <circle cx="180" cy="200" r="4" />
        <circle cx="280" cy="120" r="4" />
        <circle cx="280" cy="140" r="4" />
        <circle cx="400" cy="130" r="4" />
        <circle cx="500" cy="130" r="4" />
        <circle cx="620" cy="130" r="4" />
        <circle cx="750" cy="100" r="4" />
        <circle cx="750" cy="200" r="4" />
        <circle cx="870" cy="90" r="4" />
        <circle cx="970" cy="90" r="4" />
      </g>

      {/* Node: Check for new documents */}
      <g>
        <rect
          x="40"
          y="40"
          width="140"
          height="80"
          rx="12"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
        <text x="110" y="100" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          Check for new
        </text>
        <text x="110" y="115" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          documents
        </text>
        {/* Trigger icon */}
        <path d="M 50 50 L 55 65 L 50 60 L 45 65 Z" fill="#ef4444" />
        {/* Google Drive icon placeholder */}
        <circle cx="110" cy="65" r="12" fill="#4285F4" opacity="0.8" />
      </g>

      {/* Node: On form submission */}
      <g>
        <rect
          x="40"
          y="160"
          width="140"
          height="80"
          rx="12"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
        <text x="110" y="220" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          On form
        </text>
        <text x="110" y="235" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          submission
        </text>
        {/* Trigger icon */}
        <path d="M 50 170 L 55 185 L 50 180 L 45 185 Z" fill="#ef4444" />
        {/* Form icon placeholder */}
        <rect x="98" y="180" width="24" height="24" rx="4" fill="#06b6d4" opacity="0.8" />
      </g>

      {/* Node: Request approval */}
      <g>
        <rect
          x="280"
          y="90"
          width="120"
          height="80"
          rx="12"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
        <text x="340" y="130" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          Request
        </text>
        <text x="340" y="145" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          approval
        </text>
        <text x="340" y="160" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">
          sendAndWait: message
        </text>
        {/* Slack icon placeholder */}
        <rect x="328" y="105" width="24" height="24" rx="4" fill="#E01E5A" opacity="0.8" />
      </g>

      {/* Node: Check if request was approved */}
      <g>
        <rect
          x="500"
          y="90"
          width="120"
          height="80"
          rx="12"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
        <text x="560" y="125" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          Check if request
        </text>
        <text x="560" y="140" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          was approved
        </text>
        {/* n8n icon placeholder */}
        <rect x="548" y="100" width="24" height="24" rx="4" fill="#10b981" opacity="0.8" />
        {/* True/False labels */}
        <text x="625" y="115" fontSize="9" fill="currentColor" opacity="0.5">
          true
        </text>
        <text x="625" y="145" fontSize="9" fill="currentColor" opacity="0.5">
          false
        </text>
      </g>

      {/* Node: Capture approval */}
      <g>
        <rect
          x="750"
          y="50"
          width="120"
          height="80"
          rx="12"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
        <text x="810" y="85" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          Capture
        </text>
        <text x="810" y="100" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          approval
        </text>
        <text x="810" y="115" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">
          append: sheet
        </text>
        {/* Google Sheets icon placeholder */}
        <rect x="798" y="60" width="24" height="24" rx="4" fill="#0F9D58" opacity="0.8" />
      </g>

      {/* Node: Send confirmation email */}
      <g>
        <rect
          x="970"
          y="50"
          width="120"
          height="80"
          rx="12"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
        <text x="1030" y="85" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          Send
        </text>
        <text x="1030" y="100" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          confirmation
        </text>
        <text x="1030" y="115" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">
          send: message
        </text>
        {/* Gmail icon placeholder */}
        <rect x="1018" y="60" width="24" height="24" rx="4" fill="#EA4335" opacity="0.8" />
        {/* Plus button */}
        <circle cx="1100" cy="90" r="12" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
        <text x="1100" y="95" textAnchor="middle" fontSize="16" fill="currentColor">
          +
        </text>
      </g>

      {/* Node: Send feedback */}
      <g>
        <rect
          x="750"
          y="160"
          width="120"
          height="80"
          rx="12"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        />
        <text x="810" y="200" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="500">
          Send feedback
        </text>
        <text x="810" y="220" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">
          send: message
        </text>
        {/* Gmail icon placeholder */}
        <rect x="798" y="175" width="24" height="24" rx="4" fill="#EA4335" opacity="0.8" />
        {/* Plus button */}
        <circle cx="880" cy="200" r="12" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
        <text x="880" y="205" textAnchor="middle" fontSize="16" fill="currentColor">
          +
        </text>
      </g>
    </svg>
  )
}
