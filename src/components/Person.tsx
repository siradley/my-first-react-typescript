// Thiis is some typescript shit. Need to define the type of variable first
type PersonProps = {
    name: {
        first : string
        last : string
    }
}

export const Person = (props : PersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}