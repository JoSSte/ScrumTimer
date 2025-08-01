import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class VersionCheckService {
  private githubApiUrl = 'https://api.github.com/repos/JoSSte/ScrumTimer/releases/latest';

  constructor(private http: HttpClient) {}

  getLatestReleaseVersion() {
    return this.http.get<any>(this.githubApiUrl).pipe(
      map((release) => release.tag_name.replace(/^v/, '')) // Remove leading 'v' if exists
    );
  }
}