import ViewForm from "@/components/ViewForm/ViewForm";

export default function viewform({params}){
    const {id}=params
    return(
        <>
        <ViewForm id={id}/>
        </>
    )
}