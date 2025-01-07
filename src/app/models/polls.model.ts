export interface AllPolls {
    status: string
    statusCode: number
    data: Data
  }
  
  export interface Data {
    docs: Doc[]
    totalDocs: number
    offset: number
    limit: number
    totalPages: number
    page: number
    pagingCounter: number
    hasPrevPage: boolean
    hasNextPage: boolean
    prevPage: any
    nextPage: any
  }
  
  export interface Doc {
    data: string
    identifier: any
    question: string
    created_at: string
    updated_at: string
    id: string
    entity: string
    options: Option[]
  }
  
  export interface Option {
    data: string
    text: string
    votes_count: number
    poll_id: string
    created_at: string
    updated_at: string
    id: string
    entity: string
  }
  