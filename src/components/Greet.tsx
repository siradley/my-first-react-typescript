// Thiis is some typescript shit. Need to define the type of variable first
type GreetProps = {
    name : string
    messageCount : number
    isLoggedIn: boolean
}

export const Greet = (props : GreetProps) => {
    return (
        <div>
            {/* <h2>Hello {props.name}! I love you {props.messageCount}!</h2> */}
            <h2>
                { props.isLoggedIn
                ? `Hello ${props.name}! I love you ${props.messageCount}!`
                : 'fuckoff' }
            </h2>
        </div>
    )
}