interface CardProps{
  children : React.ReactNode;
  className?: string;
  gridSpan?: string;
}

export default function Card({children, className='', gridSpan='col-span-1'} : CardProps) {
   return (
   <div className={`border border-grey-300 p-4 ${className} ${gridSpan}`}>
      {children}
    </div>
   ); 
}
