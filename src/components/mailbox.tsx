import { InboxUnreadIcon } from "@solar-icons/react/bold-duotone"
import { InboxArchiveIcon } from "@solar-icons/react/line-duotone"

type Messages = {
    text: string
    id: string
}

interface MailboxProps {
    unreadMessages: Messages[]
}

export default function Mailbox({ unreadMessages }: MailboxProps) {

    return (
        <section className="flex items-center gap-3 border-2 p-4">
            {
                unreadMessages.length <= 0
                    ?
                    <InboxArchiveIcon size={20} />
                    :
                    <InboxUnreadIcon size={20} />
            }
            <div>
                <h2 className="border-l-2 border-dashed text-3xl">Caixa de Correio</h2> {
                    unreadMessages.length > 0 && (
                        <p className="text-3xl bg-amber-300">Tens {unreadMessages.length} mensagens por ler.</p>
                    )}
            </div>
        </section>
    )
}
