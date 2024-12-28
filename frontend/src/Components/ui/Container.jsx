
export function Container({children,classname}) {
  return (
    <div className={"max-w-7xl px-4 mx-auto" + classname}>{children}</div>
  )
}

export default Container