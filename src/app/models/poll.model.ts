export interface Poll {
    status: string
    statusCode: number
    data: Data
  }
  
  export interface Data {
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
  