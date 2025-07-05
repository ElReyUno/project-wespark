import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackList: any[] = [];
  rating: number = 5;
  comment: string = '';
  loading = false;
  error = '';

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.getFeedback();
  }

  getFeedback() {
    this.loading = true;
    this.feedbackService.getFeedback().subscribe({
      next: (data) => {
        this.feedbackList = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load feedback.';
        this.loading = false;
      }
    });
  }

  submitFeedback() {
    if (!this.comment) return;
    this.feedbackService.submitFeedback({ rating: this.rating, comment: this.comment }).subscribe({
      next: () => {
        this.comment = '';
        this.getFeedback();
      },
      error: () => {
        this.error = 'Failed to submit feedback.';
      }
    });
  }
}
