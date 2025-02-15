import { Button } from "@/components/ui/button";
import { Loader, Mail, Send } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? (
        <span className="flex items-center gap-2">
            <Loader />
        </span>
      ) : (
        <span className="flex items-center gap-2">
          Send Message
          <Send size={16} />
        </span>
      )}
    </Button>
  );
}
