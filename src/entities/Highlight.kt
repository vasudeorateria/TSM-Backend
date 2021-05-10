package com.example.myapplication.model

import android.os.Parcelable
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Highlight(
    val image: String,
    val highlightName: String,
    val highlightDescription: String
) : Parcelable