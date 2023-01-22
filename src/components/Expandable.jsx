import { createContext, useContext, useState } from 'react'

function ArrowDownIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m17 14-5 5-5-5M12 18.5V5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ExpandableContext = createContext({
  isExpanded: false,
  setIsExpanded: () => {},
})

export function Expandable({ children }) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <ExpandableContext.Provider
      value={{
        isExpanded,
        expand: () => {
          setIsExpanded(true)
        },
      }}
    >
      {children({ isExpanded })}
    </ExpandableContext.Provider>
  )
}

Expandable.Button = function Button({ children }) {
  let { isExpanded, expand } = useContext(ExpandableContext)

  return (
    !isExpanded && (
      <div className="flex justify-start mt-10">
        <button
          type="button"
          className="flex items-center text-base font-medium tracking-tight transition duration-300 ease-in-out text-sky-600 hover:text-sky-800"
          onClick={expand}
        >
          {children}
          <ArrowDownIcon className="w-6 h-6 ml-2" />
        </button>
      </div>
    )
  )
}
