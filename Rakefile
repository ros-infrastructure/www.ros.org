require 'highline'
desc "Create a new post"
task :new_post, :title do |t, args|
  mkdir_p './content/blog'
  args.with_defaults(:title => 'New Blog Post')
  url_title = args.title.split(' ').join('-').downcase
  title = url_title.split('-').join(' ').capitalize

  dirname = "./content/blog/#{Time.now.strftime('%Y-%m-%d')}-#{url_title}"  # include datestamp in title
  # dirname = "./content/blog/#{url_title}" # A default name without datestamp
  filename = "#{dirname}/index.md"

  mkdir_p dirname
  if Dir.exists?(dirname)
      abort('rake aborted!') if ask("#{dirname} already exists. Want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts '---'
    post.puts "title: \"#{title}\""
    post.puts "author: '' # Optional"
    post.puts "subtitle: '' # Optional"
    post.puts "created_at: #{Time.now}"
    post.puts 'kind: article'
    post.puts "header_class: '' # Default defined in blog layout"
    post.puts "header_image: '' # Optional. If image specified, header_class automatically assigned, else default"
    post.puts 'published: false'
    post.puts "---\n\n"
  end
end
