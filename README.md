# MicroGPT: A Miniature Transformer Built From Scratch

An educational repository implementing a character-level Autoregressive Language Model (Decoder-only Transformer) from scratch using **PyTorch**, inspired by the GPT architecture.

## 🚀 Project Overview
This project demonstrates the inner mathematical and architectural workings of Large Language Models (LLMs). Instead of using pre-built APIs, this repository implements raw token ingestion, matrix embedding, and a custom **Scaled Dot-Product Self-Attention** layer to train a miniature model on domain-specific text data.

## 🛠️ Tech Stack & Concepts Covered
* **Framework:** PyTorch (with CUDA GPU Acceleration support)
* **Tokenization:** Custom Character-Level Encoder/Decoder
* **Architecture:** Token & Positional Embeddings + Causal Linear Masking
* **Core Layer:** Scaled Dot-Product Self-Attention Matrix Mechanism ($Q, K, V$ vectors)
* **Optimization:** AdamW Optimizer & Cross-Entropy Loss Tracking

## 📊 Learning Architecture Flow
1. **Input:** Raw custom text corpus.
2. **Encoding:** Text mapping to Unique Token IDs.
3. **Batching:** Formulating $(B, T)$ Matrix Shapes where `BATCH_SIZE = 4` and `BLOCK_SIZE = 8`.
4. **Self-Attention Engine:** Capturing token relationships using Query, Key, and Value vectors while masking future tokens using a lower triangular matrix (`tril`).
5. **Training Optimization:** Backpropagation loop reducing loss from an initial `3.92` down to a compressed local minimum state.

## 📈 Training Performance
* **Untrained Model:** Outputs random character sequences (High Loss ~3.92).
* **Trained Model (with Self-Attention Upgrade):** Learns specific domain sequences, spelling structures, and structural grammar parameters from the custom dataset.
