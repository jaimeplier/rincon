import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-img-view',
  templateUrl: './img-view.component.html',
  styleUrls: ['./img-view.component.css']
})
export class ImgViewComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  img_seed_src;

  ngOnInit(): void {

      this.galleryOptions = [
          {
              width: '100%',
              height: '400px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide,
              fullWidth: false,
              imageArrows: true,
              previewForceFullscreen: false,
              previewInfinityMove: true,
              previewCloseOnClick: true,
              previewFullscreen: false,
              imageArrowsAutoHide: true,
                        
          },
          // max-width 800
          {
              breakpoint: 500,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 30,
              thumbnailsMargin: 10,
              thumbnailMargin: 20,
              
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.img_seed_src = [
       "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29425593_1638750719541108_538972813735932761_n.jpg?_nc_cat=0&oh=d5d48d1bf107b96e54e84596029fba4a&oe=5B2EBA3B",
      "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29365931_2131201533782638_514707411873824768_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFH_guwlo-7vPVrsFfiEijetjI6tlf-Ho9-HhpvI8jJHgzdwmhUJiUTbt8i39vM4IQUMFLxsz9TIn60HgZBl5xl_Ya4ZjSTavPrWIvztxydIg&oh=d13be51d2e245a37e62d1f7abccd5cf4&oe=5B74CFEB",
      "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29468446_10156041242430867_2295655325312745472_n.jpg?_nc_eui2=v1%3AAeEor45ZFdjJwOZk2n-7FQTPzGdhsJ5gFSQZlDdbf8z8QZxPRDrmSzRoIsbZR6hbzicuvMcfG2QBaOlcSoep41EzeLzCs3oZ4Fu96cNCHhIGjw&oh=a36f2f357e65f464488836906dff1728&oe=5B497561",
      "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29425893_10156041233710867_6991024486535397376_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFQJP13QbWDoalpJ4yCPFD-Z5vgp6NcS9dt9hdc43cZ572K64Asm5LUB9J6OlbFpIwksrJIzlmIoj1uh_CWGRop1QhpFiqbNpfIYENN5E_mHA&oh=149bb34bd4e48648211e3318336e87fb&oe=5B46BEFC", 
      "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29386952_1124022414405030_6178971158705078272_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeE8d89G-Nrql3UPh70G16cGvpPeTVE1xYmo7ZpKQ_CMBCQFcZDsNooqdxkCyzC-nHJY0Utdylcw55ilZtLmveadocYiOcwtm-9zN3y8tKmNAA&oh=f50db899f10797ff3ee3edc5f7d128ab&oe=5B319F6A",
      "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/29496949_10215438535373744_7943261110205939712_n.jpg?_nc_eui2=v1%3AAeHFDNnl5tVP-XLgi5IA2io0x5lj8mAKvw78vSUV5N3Hmh4uWP5oklydUbxW4WGOWxqgzZtP4cTa0JlBjN2J3fu-as9rpQvGIqPyiyNWvrLfhw&oh=b850dca5b0b8e9b54c06060a8ff7901e&oe=5B499DC7",
      "https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/29683405_1804807022918901_7924536592321510663_n.jpg?_nc_cat=0&oh=dab7e6a26e1127e7ecb7367e1c149b33&oe=5B31184E",
      "https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/29597345_1997117610606753_630821788924493745_n.jpg?_nc_cat=0&oh=92c973634b730d6153a8b1f7b24231cd&oe=5B2FE8B5"
      ]
      

      this.galleryImages = [
        {
          small: this.img_seed_src[0],
           medium: this.img_seed_src[0],
          big: this.img_seed_src[0],
        },
        {
          small: this.img_seed_src[1],
          medium: this.img_seed_src[1],
          big: this.img_seed_src[1],
        },
        {
          small: this.img_seed_src[2],
          medium: this.img_seed_src[2],
          big: this.img_seed_src[2],
        },
        {
          small: this.img_seed_src[3],
          medium: this.img_seed_src[3],
          big: this.img_seed_src[3],
        },
        {
          small: this.img_seed_src[4],
          medium: this.img_seed_src[4],
          big: this.img_seed_src[4],
        }      
      ];
  }
}
