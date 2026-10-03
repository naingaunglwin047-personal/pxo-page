// "use client";

// import { CheckCircle, Clock } from "@phosphor-icons/react";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import type { PaymentConfirmPayload } from "@/components/payment/pro-payment-form";
// import { paymentMethods, proPlanDetails } from "@/lib/payment";

// interface PaymentDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   payload: PaymentConfirmPayload | null;
// }

// export function PaymentDialog({
//   open,
//   onOpenChange,
//   payload,
// }: PaymentDialogProps) {
//   if (!payload) return null;

//   const method = paymentMethods.find(
//     (item) => item.id === payload.paymentMethod,
//   );

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent
//         // onInteractOutside={(e) => {
//         //   e.preventDefault();
//         // }}
//         showCloseButton={false}
//         className="max-w-xl rounded-2xl bg-white p-0 overflow-hidden border-none shadow-[0_24px_80px_-28px_rgba(37,99,235,0.3)]"
//       >
//         {/* Scrollable Container with Hidden Scrollbar */}
//         <div className="-mx-1 max-h-[80vh] overflow-y-auto px-6 py-8 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
//           <DialogHeader className="items-center gap-3 text-center sm:px-0">
//             <span className="flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
//               <CheckCircle className="size-8" weight="fill" />
//             </span>
//             <DialogTitle className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
//               Payment confirmation received
//             </DialogTitle>
//             <DialogDescription className="max-w-sm text-sm leading-relaxed text-slate-600">
//               Thanks, {payload.fullName}. We’re reviewing your{" "}
//               {proPlanDetails.name} payment and will activate your workspace
//               shortly.
//             </DialogDescription>
//           </DialogHeader>

//           <div className="mt-6 space-y-5">
//             <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/80">
//               <dl className="space-y-3 text-sm">
//                 <div className="flex items-start justify-between gap-4">
//                   <dt className="text-slate-500">Plan</dt>
//                   <dd className="font-medium text-slate-900">
//                     {proPlanDetails.name} · ${payload.amount}/mo
//                   </dd>
//                 </div>
//                 <div className="flex items-start justify-between gap-4">
//                   <dt className="text-slate-500">Payment method</dt>
//                   <dd className="font-medium text-slate-900">
//                     {method?.name ?? payload.paymentMethod}
//                   </dd>
//                 </div>
//                 <div className="flex items-start justify-between gap-4">
//                   <dt className="text-slate-500">Email</dt>
//                   <dd className="text-right font-medium text-slate-900">
//                     {payload.email}
//                   </dd>
//                 </div>
//                 <div className="flex items-start justify-between gap-4">
//                   <dt className="text-slate-500">Phone</dt>
//                   <dd className="font-medium text-slate-900">
//                     {payload.phone}
//                   </dd>
//                 </div>
//                 {payload.transactionId ? (
//                   <div className="flex items-start justify-between gap-4">
//                     <dt className="text-slate-500">Transaction ID</dt>
//                     <dd className="text-right font-medium text-slate-900">
//                       {payload.transactionId}
//                     </dd>
//                   </div>
//                 ) : null}
//                 <div className="flex items-start justify-between gap-4">
//                   <dt className="text-slate-500">Screenshot</dt>
//                   <dd className="max-w-[60%] truncate text-right font-medium text-slate-900">
//                     {payload.screenshotName}
//                   </dd>
//                 </div>
//               </dl>
//             </div>

//             <div className="flex items-start gap-2 rounded-xl bg-amber-50 px-3.5 py-3 text-sm text-amber-900 ring-1 ring-amber-100">
//               <Clock className="mt-0.5 size-4 shrink-0" weight="fill" />
//               <p>
//                 Verification usually takes a few hours during business days.
//                 We’ll email you at <strong>{payload.email}</strong> once Pro is
//                 active.
//               </p>
//             </div>

//             <Link href={"/"} className="w-full">
//               <Button className="h-11 w-full rounded-full bg-brand text-sm text-white hover:bg-brand-dark">
//                 Done
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";

import { CheckCircle, Clock } from "@phosphor-icons/react";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import type { PaymentConfirmPayload } from "@/components/payment/pro-payment-form";
import { paymentMethods, proPlanDetails } from "@/lib/payment";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  payload: PaymentConfirmPayload | null;
}

export function PaymentDialog({
  open,
  onOpenChange,
  payload,
}: PaymentDialogProps) {
  if (!payload) return null;

  const method = paymentMethods.find(
    (item) => item.id === payload.paymentMethod,
  );

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-xl rounded-2xl bg-white p-0 overflow-hidden border-none shadow-[0_24px_80px_-28px_rgba(37,99,235,0.3)]">
        {/* Scrollable Container with Hidden Scrollbar */}
        <div className="-mx-1 max-h-[80vh] overflow-y-auto px-6 py-8 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <AlertDialogHeader className="items-center gap-3 text-center sm:px-0">
            <span className="flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle className="size-8 justify-center" weight="fill" />
            </span>
            <AlertDialogTitle className="font-heading text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Payment confirmation received
            </AlertDialogTitle>
            <AlertDialogDescription className="max-w-sm text-sm leading-relaxed text-slate-600">
              Thanks, {payload.fullName}. We’re reviewing your{" "}
              {proPlanDetails.name} payment and will activate your workspace
              shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/80">
              <dl className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Plan</dt>
                  <dd className="font-medium text-slate-900">
                    {proPlanDetails.name} · ${payload.amount}/mo
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Payment method</dt>
                  <dd className="font-medium text-slate-900">
                    {method?.name ?? payload.paymentMethod}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Email</dt>
                  <dd className="text-right font-medium text-slate-900">
                    {payload.email}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Phone</dt>
                  <dd className="font-medium text-slate-900">
                    {payload.phone}
                  </dd>
                </div>
                {payload.transactionId ? (
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-slate-500">Transaction ID</dt>
                    <dd className="text-right font-medium text-slate-900">
                      {payload.transactionId}
                    </dd>
                  </div>
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-500">Screenshot</dt>
                  <dd className="max-w-[60%] truncate text-right font-medium text-slate-900">
                    {payload.screenshotName}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex items-start gap-2 rounded-xl bg-amber-50 px-3.5 py-3 text-sm text-amber-900 ring-1 ring-amber-100">
              <Clock className="mt-0.5 size-4 shrink-0" weight="fill" />
              <p>
                Verification usually takes a few hours during business days.
                We’ll email you at <strong>{payload.email}</strong> once Pro is
                active.
              </p>
            </div>

            <AlertDialogFooter className="sm:justify-center">
              <Link
                href="/"
                className="flex h-11 w-full items-center justify-center rounded-full bg-brand text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Done
              </Link>
            </AlertDialogFooter>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}