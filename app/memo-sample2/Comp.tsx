import { memo } from "react";

type Props = { str: string }

function Comp({ str }: Props) {
    console.log("🟦 Child rendered")

    return <p>{str}</p>
}

export default memo(Comp)
