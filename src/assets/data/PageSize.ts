export type  PageSizeItem={
    title: string
    width:number
    height:number
    id:string|number
}

export const PageSizeList=[
   {
     title: "800px*600px",
     width: 800,
     height:600,
     id:1
   },
   {
    title: "600px*800px",
    width: 600,
    height:800,
    id:2
  }
] as PageSizeItem[]