import { memo } from "react";

type Props = { str: string }

export default memo(({ str }: Props) => {
    console.log("🟦 Child rendered")

    return <p>{str}</p>
})