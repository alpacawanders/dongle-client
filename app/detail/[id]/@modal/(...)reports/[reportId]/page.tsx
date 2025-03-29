"use client";

import ModalContainer from "@/components/common/ui/modal/ModalContainer";
import Report from "@/components/domain/reports/Report";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <ModalContainer onClose={() => router.back()}>
      <div className="max-h-[90vh] w-[70vw] px-4">
        <Report />
      </div>
    </ModalContainer>
  );
}
