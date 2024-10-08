import { signIn } from "@/auth"
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
            className="flex gap-2"
        >
            <button type="submit"><GitHubLogoIcon /> Sign in with GitHub</button>
        </form>
    )
}