"use client";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CloseDetailsButton() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    
    const closeDetails = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("filmId");
        router.replace(`${ pathname }?${ params.toString() }`);
    }
    
    return (
        <Button variant="outline" size="icon" onClick={ closeDetails }>
            <XIcon className="h-4 w-4"/>
        </Button>
    );
}