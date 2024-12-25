

const Title = ({text1, text2}) => {
  return (
    <div className="inline-flex items-center gap-2 mb-2">
      <p className="text-gray-500 ">{text1} <span className="font-medium text-gray-700">{text2}</span> </p>
      <p className="w-8 sm:w-12 h-[1px] bg-gray-700"></p>
    </div>
  )
}

export default Title