export function OrderedList(): JSX.Element {
    return (
        <section>
            <ol>
                <li>I am a list item</li>
                <li>I am a list item</li>
                <li>I am a list item</li>
                <li>I am a list item</li>
                <li>I am a list item</li>
            </ol>
        </section>
    )
}

export function UnorderedList(): JSX.Element {
    return (
        <section>
            <ul>
                <li>I am a list itme</li>
                <li>I am a list itme</li>
                <li>I am a list itme</li>
                <li>I am a list itme</li>
                <li>I am a list itme</li>
            </ul>
        </section>
    )
}

export function DescriptionList(): JSX.Element {
    return (
        <section>
            <dl>
                <dt>Coffee</dt>
                <dd>Black hot drink</dd>
                <dt>Milk</dt>
                <dd>White cold drink</dd>
            </dl>
        </section>
    )
}