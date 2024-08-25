import IconLogo from "@/assets/IconLogo";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import React from "react";
import Metadata from "./Metadata";

type Props = { children: JSX.Element };

function Layout({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Metadata
        title="OpenFlow"
        description="A privacy-preserving solution for transparent transaction auditing
              using zero-knowledge proofs."
        keywords="zk, blockchain"
        author="OpenFlow"
      />
      <main className="w-full h-full min-h-screen flex flex-col justify-start items-center relative pb-10">
        <nav className="w-full h-[80px] max-w-[1024px] items-center px-4 xl:px-0 pt-10 pb-10 md:pb-4 flex sticky top-0 bg-white !z-[50]">
          <div className="w-full flex gap-2">
            <IconLogo className="w-8 h-8" />
            <h1 className="font-extrabold text-2xl">OpenFlow</h1>
          </div>
        </nav>
        {children}
      </main>
    </QueryClientProvider>
  );
}

export default Layout;
