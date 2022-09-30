import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { GmVoting } from "../target/types/gm_voting";

describe("gm-voting", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.GmVoting as Program<GmVoting>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
