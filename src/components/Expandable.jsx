import { createContext, useContext, useState } from 'react'

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
        </button>
      </div>
    )
  )
}
