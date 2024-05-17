export interface Review {
    firmImg: string;
    firm: string;
    trustScore?: number;
    allReviews?: number;
    address?: string;
    reviews: UserReview[];
}

export interface UserReview {
    userID: string;
    dateTime: string;
    trustVote: number;
    reviewText: string;
}

