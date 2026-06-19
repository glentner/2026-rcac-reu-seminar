---
title: "Workflow Engineering, Data Management, and Advanced Automation"
speaker: "Geoffrey Lentner"
role: "Principal AI Scientist"
affiliation: "Rosen Center for Advanced Computing (RCAC), Purdue University"
email: "glentner@purdue.edu"
venue: "Summer REU Seminar Series"
location: "Envision Center, Purdue University, West Lafayette, IN"
duration_minutes: 30
---

# Goal

Outline a vision, conceptual framing, and design thinking around a seminar to be delivered to both
undergraduate REU (intern) students and other research computing professionals.

Amanda Hassenplug requested I deliver this seminar again this summer to be presented next week.
I presented last summer on the same topic, though I was disappointed with my treatment of the topic
and wish to greatly refine, expand, and improve upon the material and deliver this year.

Here is the initial description Amanda and I came up with a few months ago:

> Task-based, data-centric throughput computing workflows represent a growing slice of the research
> computing space. Unlike traditional high-performance computing (HPC), these workflows can be
> large in volume of tasks and data or even have complex relationships between them. Managing data
> and workflow definitions requires specific conceptual understanding and technical skills. The use
> of software tools to manage these workflow steps and data movement is ubiquitous. Domain-specific
> examples in this category include Bioinformatics, Astronomy, Optimization, Machine Learning and
> Artificial Intelligence.
>
> This lecture will include an overview of the topic, the landscape of tools used in this space,
> and discussion of the challenges researchers face in managing their workflows.

What I'm hoping to do with this presentation is to show the students what it can actually look like
to operationalize scientific workflows in research computing infrastructure. This is transferable to
cloud infrastructure as well; the tools can look the same (Kubernetes) or different (Slurm). It's
not enough to write some code in a Jupyter notebook in something like VS Code. We need to execute
our code, possibly "at scale", while managing the complexity of installation/deployment, versioning,
inputs, data management, completion/history, along with the realities of having tasks taking advantage
of different resources (core counts, memory, GPU, etc). This can start out as simple as a template Slurm
job script in Bash, submitted by hand, running to completion. But we have tools, including traditional
ones like GNU Make (was populate in data science for a time) or new contenders like NextFlow. 

It's not just about DAGs though. There can be a lot of layers here. Your code could be containerized,
build/exec by a job management tool, persisted with some database, with tasks templatized inside a Jinja
enabled DSL, with a resource manager and executor (like Slurm, Kubernetes, or something else). 

It's a zoo.

I want to balance between really shocking them by the landscape and methods out there but at the same
time tame that complexity and show them how to think about it and manage it with advise on keeping things
simple first and only adding complexity where it benefits the workflow.

Our task here is to formulate ideas on what we can cover and how to achieve our goals. We'll take these
and build an OUTLINE.md file in this project that includes our core context and out slide deck in
abstract form with bullet points for what should be on the slide and what our talking points will be.
We need to keep in mind our time budget.


## Ideas

- "X-men: First Class" Erik/Magneto "Perfection" meme to refer to the ultimate complexity in a
  workflow design. Something like having a web service control a scheduling system to maintain a 
  DAG to understand relationships and spawn service workers with Slurm only to spin up containers
  to run a Python function to do the real thing. This is meant as a light-hearted joke to make fun
  of the absurdity we go to with workflows. We don't want to create a Rube Goldberg machine that
  only the builder can understand.

- "Merchants of Complexity" is a phrase often levied at industry tech companies that relates to
  this. We're talking about research workflows but industry has the same problem with Kubernetes
  and Airflow and countless other platform techologies and the cloud to "just do the thing". I'm
  thinking we could somehow paint a picture (literally and with words) to speak to this balance
  between complexity and simplicity to get the job done.

- I want to have a clean "terminal window" feel for code examples (running commands). But we need
  to handle that versus just showing "code" generally for things like workflow definitions.

- For data management we need to handle the notion of cold-warm-hot data. In HPC (Purdue RCAC) we
  have Fortress (tape library), Data Depot (POSIX - spinning disk), Scratch (POSIX - all flash).
  In the absense of a perfect filesystem overlay to abstract data tiering, it's a researcher's
  responsibility to directly tier data in the application layer. This can be as simple as an 'rsync'
  in your job script to-from high-performance storage before calling your application/workflow. Or
  it can be more sophisticated and part of data staging with dedicated workflow steps through dependency
  relationships.

- My primary responsibility now as Principal AI Scientist has a lot more to do with AI/agentic research
  workflows. But agentic still has the same kind of feel to classic research workflows. I'm thinking
  we should come up with some kind of treatment for the presentation that mentions AI being part of
  workflows now.


## Visual Design

The 2026-nairr-workshop-talk we worked on (adjacent to this repo) had us develop a bit of a "Purdue"
template we can port over to this project. The visual aspect of this is not the important thing for us
to deal with right now though.


## Process

- Refine ideas.
- Construct OUTLINE.md
- Create ROADMAP.md with implementation plan for slidev talk.
- Create /continue skill to iterate on implementation.


## Related Materials

- ../2026-nairr-workshop-talk (slidev presentation with similar agentic material and Purdue theme)
- ../2026-nairr-workshop-talk/OUTLINE.md (outline file example we want to emulate)
- ~/Documents/Purdue/Presentations/REU Seminar - Data Management and Workflow Templates.pdf (last year's presentation)

