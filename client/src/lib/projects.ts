export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  icon: string;
  tags: string[];
  color: 'neural' | 'synapse' | 'gray';
}

export const projects: Project[] = [
  {
    id: 'formal-arithmetic',
    title: 'Formal Arithmetic Realizations',
    description: 'Developed formal models of floating-point arithmetic for matrix accelerators using Z3 Theorem Prover. Published at 2024 International Supercomputing Conference.',
    period: 'June-Nov 2024',
    icon: 'calculator',
    tags: ['Z3', 'Formal Methods', 'SMT'],
    color: 'neural'
  },
  {
    id: 'spatial-transcriptomics',
    title: 'Spatial Transcriptomics',
    description: 'Trained deep CNN for 3D segmentation of 30GB+ spatial transcriptomics datasets, achieving state-of-the-art performance with custom preprocessing pipeline.',
    period: 'Jan-June 2024',
    icon: 'brain',
    tags: ['PyTorch', 'Deep Learning', 'Bioimage Analysis'],
    color: 'synapse'
  },
  {
    id: 'babygpt',
    title: 'BabyGPT',
    description: 'Incrementally built GPT-like language model from bigram to transformer architecture. Educational exploration of modern NLP fundamentals.',
    period: 'Dec 2024',
    icon: 'robot',
    tags: ['Python', 'Transformers', 'NLP'],
    color: 'neural'
  },
  {
    id: 'spiking-neural-networks',
    title: 'Spiking Neural Networks',
    description: 'NEST Simulator implementation of LIF neuron models. Explored synaptic connectivity patterns and temporal dynamics visualization.',
    period: 'Jan 2025',
    icon: 'wave-square',
    tags: ['NEST', 'Computational Neuroscience', 'Python'],
    color: 'synapse'
  },
  {
    id: 'risc-v',
    title: 'RISC-V Processor',
    description: 'Hard-wired control logic for RISC-V 32-bit instructions with pipelined datapath. Optimized softmax function improving accuracy from 60% to 85%.',
    period: 'Dec 2024',
    icon: 'microchip',
    tags: ['Verilog', 'Computer Architecture', 'Digital Logic'],
    color: 'gray'
  },
  {
    id: 'neural-signal-processing',
    title: 'Neural Signal Processing',
    description: 'C++ pipeline for spike detection and sorting using band-pass filters and peak analysis. Applied DFT and convolution to synthetic extracellular recordings.',
    period: 'Spring 2025',
    icon: 'chart-line',
    tags: ['C++', 'Signal Processing', 'DFT'],
    color: 'neural'
  }
];
